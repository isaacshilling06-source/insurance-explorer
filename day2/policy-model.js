class Policy {
  constructor(
    policyNumber,
    accountName,
    lob,
    programType,
    premium,
    exposureLevel,
    losses = []
  ) {
    this.policyNumber = policyNumber;
    this.accountName = accountName;
    this.lob = lob;
    this.programType = programType;
    this.premium = premium;
    this.exposureLevel = exposureLevel;
    this.losses = losses;
  }

  totalIncurred() {
    return this.losses.reduce(
      (sum, loss) =>
        sum + loss.paidAmount + loss.reserveAmount,
      0
    );
  }

  lossRatio() {
    return this.totalIncurred() / this.premium;
  }

  isHighExposure() {
    return (
      this.exposureLevel === "High" ||
      this.exposureLevel === "Catastrophic"
    );
  }
}
