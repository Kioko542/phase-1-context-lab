// Your Code Here

// We're giving you this function to use.
// It helps calculate the total wages for an employee.
const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date;
    });

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d);
    }.bind(this), 0);

    return payable;
}

const createEmployeeRecord = function (arr) {
    return {
        firstName: arr[0],
        familyName: arr[1],
        title: arr[2],
        payPerHour: arr[3],
        timeInEvents: [],
        timeOutEvents: []
    };
};

const createEmployeeRecords = function (arr) {
    return arr.map(createEmployeeRecord);
};

const createTimeInEvent = function (dateStamp) {
    const [date, hour] = dateStamp.split(" ");
    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour),
        date: date
    });
    return this;
};

const createTimeOutEvent = function (dateStamp) {
    const [date, hour] = dateStamp.split(" ");
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour),
        date: date
    });
    return this;
};

const hoursWorkedOnDate = function (date) {
    const timeIn = this.timeInEvents.find(function (event) {
        return event.date === date;
    });
    const timeOut = this.timeOutEvents.find(function (event) {
        return event.date === date;
    });
    return (timeOut.hour - timeIn.hour) / 100;
};

const wagesEarnedOnDate = function (date) {
    return hoursWorkedOnDate.call(this, date) * this.payPerHour;
};

const findEmployeeByFirstName = function (srcArray, firstName) {
    return srcArray.find(function (record) {
        return record.firstName === firstName;
    });
};

const calculatePayroll = function (employeeRecords) {
    return employeeRecords.reduce(function (totalPayroll, employee) {
        return totalPayroll + allWagesFor.call(employee);
    }, 0);
};

module.exports = {
    createEmployeeRecord,
    createEmployeeRecords,
    createTimeInEvent,
    createTimeOutEvent,
    hoursWorkedOnDate,
    wagesEarnedOnDate,
    allWagesFor,
    findEmployeeByFirstName,
    calculatePayroll
};

