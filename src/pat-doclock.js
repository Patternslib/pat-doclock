import $ from "jquery";
import Base from "@patternslib/patternslib/src/core/base";
import Parser from "@patternslib/patternslib/src/core/parser";
import registry from "@patternslib/patternslib/src/core/registry";

export const parser = new Parser("doclock");
parser.add_argument("url", "");

export default Base.extend({
    name: "doclock",
    trigger: ".pat-doclock",
    _changed: false,

    defaults: {
        // events on which to check for changes
        changingEvents: "change keyup paste",
        // fields on which to check for changes
        changingFields: "input,select,textarea,fileupload,[contenteditable=true]",
    },

    init() {
        if (!this.el.tagName === "FORM") {
            return;
        }

        this.options = parser.parse(this.el, this.options);

        // unlock when changing page
        window.addEventListener("beforeunload", this.unlock.bind(this), {
            capture: true,
        });

        // unlock when the form gets removed from the DOM
        this.$el.bind("DOMNodeRemoved", (e) => {
            if (e.target === this.el) {
                this.unlock.bind(this)();
            }
        });

        // lock when elements are changed
        $(this.defaults.changingFields, this.$el).on(
            this.defaults.changingEvents,
            this.lock.bind(this)
        );
    },

    inject_response(data) {
        var $data = $("<div>" + data + "</div>");
        $("#global-statusmessage").html($data.find("#global-statusmessage").html());
        registry.scan($("#global-statusmessage"));
        $(".quick-functions #saving-badge, .quick-functions #save-button").replaceWith(
            $data.find("#content-core").html()
        );
        registry.scan(
            $(".quick-functions #saving-badge, .quick-functions #save-button")
        );
    },

    lock() {
        if (this._changed) {
            return;
        }
        if (!this.options.url) {
            return;
        }
        this._changed = true;
        $.ajax({
            url: this.options.url,
            data: {
                lock: true,
            },
            success: this.inject_response.bind(this),
        });
    },

    unlock() {
        if (!this._changed) {
            return;
        }
        if (!this.options.url) {
            return;
        }
        $.ajax({
            url: this.options.url,
            data: {
                unlock: true,
            },
            success: this.inject_response.bind(this),
        });
        this._changed = false;
    },
});
