import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
    // test: status з props(ів) повинен перейти в status state(а)
    test("status from props should be in the state", () => {
        const component = create(<ProfileStatus status="it-kamasutra.com" />);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("it-kamasutra.com");
    });

    // test: <span> повинен бути відображеним
    test("after creation <span> should be displayed", () => {
        const component = create(<ProfileStatus status="it-kamasutra.com" />);
        const root = component.root;
        const span = root.findByType("span");
        expect(span).not.toBeNull();
    });
})