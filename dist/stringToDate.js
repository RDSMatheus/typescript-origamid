export default function stringToDate(text) {
    const [date, time] = text.split(' ');
    const [day, month, year] = date.split('/').map(Number);
    const [hour, minutes] = time.split(':').map(Number);
    return new Date(year, month - 1, day, hour, minutes);
}
//# sourceMappingURL=stringToDate.js.map