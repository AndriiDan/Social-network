// валідатор - поле є обов'язковим до заповнення
export const required = value => {
    // якщо є значення
    if (value) return undefined;
    return "Field is required."
}

// валідатор - Creator для різних максимальних довжин
export const maxLengthCreator = (maxLength) => (value) => {
    if (value.length > maxLength) return `Max length ${maxLength} symbols.`;
    return undefined;
}