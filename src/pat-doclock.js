import $ from "jquery";
import Base from "patternslib/src/core/base";
import Parser from "patternslib/src/core/parser";
import registry from "patternslib/src/core/registry";

const parser = new Parser("doclock");
parser.add_argument("url", "");


export default Base.extend({
    name: "doclock",
    trigger: ".pat-doclock",
    _changed: false,
    defaults: {
        // events on which to check for changes
        changingEvents: "change keyup paste",
        // fields on which to check for changes
        changingFields: "input,select,textarea,fileupload,[contenteditable=true]"
    },
    init: function() {
        this.options = parser.parse(this.$el);
        this.set_listeners();
    },
    inject_response: function(data) {
        var $data = $("<div>" + data + "</div>");
        $("#global-statusmessage").html(
            $data.find("#global-statusmessage").html()
        );
        registry.scan($("#global-statusmessage"));
        $(".quick-functions #saving-badge, .quick-functions #save-button").replaceWith(
            $data.find("#content-core").html()
        );
        registry.scan($(".quick-functions #saving-badge, .quick-functions #save-button"));
    },
    lock: function() {
        var self = this;
        if (self._changed) {
            return;
        }
        if (!self.options.url) {
            return;
        }
        self._changed = true;
        $.ajax({
            url: self.options.url,
            data: {
                "lock": true
            },
            success: this.inject_response.bind(this)
        });
    },
    unlock: function() {
        var self = this;
        if (!self._changed) {
            return;
        }
        if (!self.options.url) {
            return;
        }
        $.ajax({
            url: self.options.url,
            data: {
                "unlock": true
            },
            success: this.inject_response.bind(this)
        });
        self._changed = false;
    },
    set_listeners: function() {
        var self = this;
        if (!self.$el.is("form")) {
            return;
        }
        // unlock when changing page
        $(window).on(
            "beforeunload",
            self.unlock.bind(self)
        );

        // unlock when the form gets removed from the DOM
        self.$el.bind("DOMNodeRemoved", function(e) {
            if (e.target === self.$el[0]) {
                self.unlock.bind(self)();
            }
        });

        // lock when elements are changed
        $(self.defaults.changingFields, self.$el).on(
            self.defaults.changingEvents,
            self.lock.bind(self)
        );
    }
});
