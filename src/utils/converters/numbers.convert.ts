const formatNumbers = (num: number) => {
    if (!num) return 0;
    const formattedNumber = num.toLocaleString();
    return formattedNumber;
}

export { formatNumbers };