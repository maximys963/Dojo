/**
 *
 * Test with dates within the range.
 * Test with dates outside the range.
 *
 */

function isWithinDateRange(date: Date, startDate: Date, endDate: Date) {
    const d = new Date(date);
    const start = new Date(startDate);
    const end = new Date(endDate);
    return d >= start && d <= end;
}
