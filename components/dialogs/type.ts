export const customStyles = {
    content: {
      top: '0',
      right:'0',
      left: 'auto',
      bottom: 'auto',
      padding: 0,
    },
    overlay: {
        zIndex: 1000
    }
};

export enum DialogResult {
    OK = 'OK',
    Yes = 'YES',
    No = 'No'
}

export enum DialogType {
    Alert = 'ALERT',
    Confirmation = 'CONFIRMATION'
}
