import "regenerator-runtime/runtime"; // needed for ``await`` support
import Base from "@patternslib/patternslib/src/core/base";
import logging from "@patternslib/patternslib/src/core/logging";
import Parser from "@patternslib/patternslib/src/core/parser";
import registry from "@patternslib/patternslib/src/core/registry";

const logger = logging.getLogger("pat.doclock");

export const parser = new Parser("doclock");
parser.add_argument("url", "");

export default Base.extend({
    name: "doclock",
    trigger: ".pat-doclock",
    _changed: false,

    // fields on which to check for changes
    changing_fields: "input,select,textarea,fileupload,[contenteditable=true]",

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
        const remove_observer = new MutationObserver((record) => {
            if (record.type === "childList") {
                for (const el of record.removedNodes) {
                    if (el === this.el) {
                        logger.debug("form removed");
                        this.unlock();
                    }
                }
            }
        });
        remove_observer.observe(this.el.parentNode, { childList: true });

        // lock when elements are changed
        for (const field of this.el.querySelectorAll(this.changing_fields)) {
            field.addEventListener("input", this.lock.bind(this));
        }
    },

    inject_response(data) {
        const data_el = document.createElement("div");
        data_el.innerHTML = data;

        const status = data_el.querySelector("#global-statusmessage");
        if (status) {
            for (const el of document.querySelectorAll("#global-statusmessage")) {
                logger.debug("replacing statusmessage");
                el.innerHTML = status.innerHTML;
                registry.scan(el);
            }
        }

        const content = data_el.querySelector("#content-core");
        if (content) {
            for (const el of document.querySelectorAll(
                ".quick-functions #saving-badge, .quick-functions #save-button"
            )) {
                logger.debug("replacing quick functions");
                el.outerHTML = content.innerHTML;
                registry.scan(el);
            }
        }

        logger.debug("initialization done");
    },

    async lock() {
        logger.debug("entering lock");
        if (this._changed) {
            logger.debug("already locked");
            return;
        }
        if (!this.options.url) {
            return;
        }
        logger.debug("locking");
        this._changed = true;
        const response = await fetch(`${this.options.url}?lock=true`);
        const data = await response.text();
        this.inject_response(data);
        logger.debug("locked");
    },

    async unlock() {
        logger.debug("entering unlock");
        if (!this._changed) {
            logger.debug("already unlocked");
            return;
        }
        if (!this.options.url) {
            return;
        }
        logger.debug("unlocking");
        const response = await fetch(`${this.options.url}?unlock=true`);
        const data = await response.text();
        this.inject_response(data);
        this._changed = false;
        logger.debug("unlocked");
    },
});
