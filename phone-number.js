class PhoneNumber {
  constructor(phoneNumber) {
    this.phoneNumber = phoneNumber;
  }

  number() {
    let number = this.phoneNumber.replace(/\D/g, "").replace(/^1/, "");

    if (this.checkInvalid(number)) return null;

    return number;
  }

  checkInvalid(number) {
    return number.length != 10 ||
      number.charAt(0).match(/[0|1]/) ||
      number.charAt(3).match(/[0|1]/);
  }
}


export default PhoneNumber
