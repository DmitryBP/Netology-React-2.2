
export type viweModeType = 'module' | 'table';
export type iconType = 'view_list' | 'view_module';

type IconSwitchType = {
  onSwitch: () => void,
  icon: iconType,
}


export default function IconSwitch(props:IconSwitchType) {
  return (
    <div className="iconWrp">
      <span className="material-icons" onClick={()=>props.onSwitch()}>{props.icon}</span>
    </div>
  )
}
