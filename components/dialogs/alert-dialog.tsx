import {DialogResult, DialogType} from './type'

interface Props { 
    title: string,
    okCaption: string,
    message: string,
    type: DialogType,
    onClose: (res: DialogResult) => void,
    closeDialog: () => void,
}

export function AlertDialog({title, okCaption, message, type, onClose, closeDialog}: Props){
    const closeWithResult = (result: DialogResult) => {
        closeDialog();
        onClose(result);
    }

    return (
        <div className="-500 py-30 px-20">
            <h5 className="text-light-500 text-center text-22 font-medium mb-15">{title}</h5>
            <p className="text-light-500 text-center text-16 font-normal mb-30 px-10 lg:px-30">{message}</p>
            <div className="flex justify-center pt-10">
                {type === DialogType.Alert && 
                    <button className="btn btn-primary btn-md" onClick={()=> closeWithResult(DialogResult.OK)}>okCaption</button>}
                {type === DialogType.Confirmation && (<>
                    <button className="btn btn-danger btn-md mr-30" onClick={()=> closeWithResult(DialogResult.Yes)}>Yes</button>
                    <button className="btn btn-danger btn-md " onClick={()=> closeWithResult(DialogResult.No)}>No</button> </>)
                }
                
            </div>

        </div>
    )
}

AlertDialog.defaultProps = {
    type: DialogType.Alert,
    okCaption: 'OK',
    onClose:()=>{},
    closeDialog: ()=>{}
}