class PhoneNumber {
  constructor(phoneNumber) {
    this.phoneNumber = phoneNumber;
  }

  number() {
    let number = this.phoneNumber.replace(/\D/g, "").replace(/^1/, "");

    if (number.length < 10 || number.length > 10) {
      return null
    }

    return number;
  }
}

export default PhoneNumber
