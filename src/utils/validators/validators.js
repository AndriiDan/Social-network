// валадатор - поле є обов'язковим до заповнення
export const required = value => {
    // якщо є значення
    if (value) return undefined;
    return "Field is required."
}