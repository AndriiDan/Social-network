// валадатор - поле є обов'язковим до заповнення
export const required = value => {
    // якщо є значення
    if (value) return undefined;
    return "Field is required."
}

export const maxLength10 = value => {
    if (value.length > 10) return "Max length 10 symbols.";
    return undefined;
}