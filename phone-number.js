class PhoneNumber {
  constructor(phoneNumber) {
    this.phoneNumber = phoneNumber;
  }

  number() {
    return this.phoneNumber.replace(/\D/g, "");
  }
}

export default PhoneNumber
