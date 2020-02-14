export type BatteryInfo = {
  level: number;
  charging: boolean;
};
export type BatteryManager = BatteryInfo & EventTarget;

// tslint:disable no-class no-this no-expression-statement no-object-mutation
export class MockBatteryManager extends EventTarget implements BatteryManager {
  public level = 1;
  public charging = false;
  constructor() {
    super();
  }
  setCharging = (charging: boolean) => {
    this.charging = charging;
    this.dispatchEvent(new Event('chargingchange'));
  };
  setLevel = (level: number) => {
    this.level = level;
    this.dispatchEvent(new Event('levelchange'));
  };
}
