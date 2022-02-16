import SuccessIcon from "./icons/info-icon";

export default function SuccessAlert(props: any){
    return (
        <div className="rounded-md flex flex-row text-green-500 bg-green-500/20 py-2 px-3">
            <SuccessIcon className="my-auto mr-2 h-12 w-12"/>
            {props.message}
        </div>
    )
}