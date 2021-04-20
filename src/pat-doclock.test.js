import "regenerator-runtime/runtime"; // needed for ``await`` support
import $ from "jquery";
import pattern from "./pat-doclock";
import utils from "@patternslib/patternslib/src/core/utils";

describe("pat-doclock", () => {
    beforeEach(() => {
        document.body.innerHTML = "";
    });

    it("is initialized correctly", async (done) => {
        const spy_ajax = spyOn($, "ajax");

        document.body.innerHTML = `
            <form class="pat-doclock" data-pat-doclock="url: ./toggle-lock">
                <input name="aha" type="text" />
            </form>
        `;

        pattern.init(document.querySelector(".pat-doclock"));
        await utils.timeout(1);

        expect(spy_ajax).not.toHaveBeenCalled();

        document.querySelector("input[name=aha]").dispatchEvent(new Event("change"));

        expect(spy_ajax).toHaveBeenCalledTimes(1);

        document
            .querySelector("form.pat-doclock")
            .dispatchEvent(new Event("DOMNodeRemoved"));

        expect(spy_ajax).toHaveBeenCalledTimes(2);

        done();
    });
});
