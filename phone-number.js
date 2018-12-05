class PhoneNumber {
  constructor(phoneNumber) {
    this.phoneNumber = phoneNumber;
  }

  number() {
    if (this.phoneNumber.length < 10 || this.phoneNumber > 10) {
      return null
    }

    return this.phoneNumber.replace(/\D/g, "");
  }
}

export default PhoneNumber
