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

    // test: <input> не повинен бути відображеним; тест - повинна бути помилка (toThrow)
    test("after creation <input> shouldn't be displayed", () => {
        const component = create(<ProfileStatus status="it-kamasutra.com" />);
        const root = component.root;
        expect(() => {
            const input = root.findByType("input");
        }).toThrow();
    });

    // test: в <span> повинен відображатися коректний статус
    test("after creation <span> should contains correct status", () => {
        const component = create(<ProfileStatus status="it-kamasutra.com" />);
        const root = component.root;
        const span = root.findByType("span");
        // children - те, що в середині елемента <span> в ProfileStatus.jsx
        expect(span.children[1]).toBe("it-kamasutra.com");
    });

    // test: При doubleClick на <span> повинен відображатися <input> з значенням "it-kamasutra.com"
    test("input should be displayed in editMode instead of span", () => {
        const component = create(<ProfileStatus status="it-kamasutra.com" />);
        const root = component.root;
        // в компоненті знайти span
        const span = root.findByType("span");
        // імітація при onDoubleClick на span виконається activateEditMode = () => {this.setState({editMode: true} і span зміниться на input
        span.props.onDoubleClick();
        // // в компоненті знайти input
        const input = root.findByType("input");
        // очікувати значення (input.props.value) "it-kamasutra.com"
        expect(input.props.value).toBe("it-kamasutra.com");
    });

    // test: перевіряє, чи був викликаний callback (deactiveteEditMode)
    test("callback should be called", () => {
        // спеціальна функція, яка перевіряє чи був викликаний callback
        const mockCallBack = jest.fn();
        // ProfileStatus має callback updateStatus (оновити статус), в ного закивуємо ф-цію mockCallback
        const component = create(<ProfileStatus status="it-kamasutra.com" updateStatus={mockCallBack} />);
        const instance = component.getInstance();
        // в компоненті викликаємо імітацію deactivateEditMode() (змінює editMode з false на true - замість input буде span)
        instance.deactivateEditMode();
        // дивимося, чи в ф-ції mockCallBack в масиві calls довжина стала 1 - тобто, скільки разів був викликаний updateStatus (1 раз)
        expect(mockCallBack.mock.calls.length).toBe(1);
    });
})