import * as React from 'react';
import { compose, setDisplayName } from 'recompose';
import { BatteryIcon, Variant } from '../BatteryIcon';
import { BatteryInfo, BatteryManager } from './common';
// TODO FIXME decide if to keep it and make it more reusable
type Props = Readonly<{
  className?: string;
  variant?: Variant;
  counter?: boolean;
  getBatteryManager: () => Promise<BatteryManager>;
}>;

const DIALOG_TIMEOUT_MS = 1 * 60 * 60 * 1000;

const SmartBatteryIconComp = (props: Props) => {
  const [info, setInfo] = React.useState<BatteryInfo>();
  const [dialog, setDialog] = React.useState(false);
  const [dialogTimeout, setDialogTimeout] = React.useState<NodeJS.Timer>();

  React.useEffect(() => {
    const batteryPromise: Promise<BatteryManager> = props.getBatteryManager();
    // tslint:disable no-expression-statement no-floating-promises
    const onChange = async () => {
      const battery = await batteryPromise;
      setInfo({ charging: battery.charging, level: battery.level * 100 });
      // if battery level is below 20% and not charging show the dialog every 1h
      if (!dialogTimeout && !battery.charging && battery.level <= 0.2) {
        setDialog(true);
        setDialogTimeout(
          // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
          //@ts-ignore
          setTimeout(() => {
            setDialogTimeout(undefined);
          }, DIALOG_TIMEOUT_MS)
        );
      }
      // reset timeout when plugged in
      if (battery.charging && dialogTimeout) {
        clearTimeout(dialogTimeout);
        setDialogTimeout(undefined);
      }
    };
    batteryPromise.then(battery => {
      setInfo({ charging: battery.charging, level: battery.level * 100 });
      battery.addEventListener('chargingchange', onChange);
      battery.addEventListener('levelchange', onChange);
    });
    return () => {
      // IIFE
      (async () => {
        const battery = await batteryPromise;
        battery.removeEventListener('chargingchange', onChange);
        battery.removeEventListener('levelchange', onChange);
      })();
    };
    // tslint:enable
  }, [dialog, dialogTimeout, props.getBatteryManager]);
  const openDialog = () => setDialog(true);

  if (!info) {
    return null;
  }

  return (
    <>
      <div onClick={openDialog}>
        <BatteryIcon {...props} level={info.level} charging={info.charging} />
      </div>
      {dialog ? 'OPEN ANOTHER COMPONENT HERE' : null}
    </>
  );
};

export const SmartBatteryIcon = compose<Props, Props>(setDisplayName('SmartBatterIcon'))(
  SmartBatteryIconComp
);
