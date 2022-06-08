import pattern from "./pat-doclock";
import utils from "@patternslib/patternslib/src/core/utils";
import { jest } from "@jest/globals";

const mockFetch = () =>
    Promise.resolve({
        text: () => Promise.resolve("okay"),
    });

describe("pat-doclock", () => {
    beforeEach(() => {
        document.body.innerHTML = "";
    });

    it("is initialized correctly", async () => {
        global.fetch = jest.fn().mockImplementation(mockFetch);

        document.body.innerHTML = `
            <form class="pat-doclock" data-pat-doclock="url: ./toggle-lock">
                <input name="aha" type="text" />
            </form>
        `;

        pattern.init(document.querySelector(".pat-doclock"));
        await utils.timeout(1);

        expect(global.fetch).not.toHaveBeenCalled();

        document.querySelector("input[name=aha]").dispatchEvent(new Event("input"));

        expect(global.fetch).toHaveBeenCalledTimes(1);

        window.dispatchEvent(new Event("beforeunload"));

        expect(global.fetch).toHaveBeenCalledTimes(2);
    });
});
