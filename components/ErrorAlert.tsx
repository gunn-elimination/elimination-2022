import WarningIcon from "./icons/warning-icon";

export default function ErrorAlert(props: any){
    return (
        <div className="rounded-md flex flex-row text-red-500 bg-red-500/20 py-2 px-3">
            <WarningIcon className="my-auto mr-2 h-5 w-5"/>
            {props.message}
        </div>
    )
}