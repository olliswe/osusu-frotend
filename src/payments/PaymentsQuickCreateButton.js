import React, { useState } from 'react';
import { useForm } from 'react-final-form';
import {
    fetchEnd,
    fetchStart,
    showNotification,
    Button,
    SaveButton,
    SimpleForm,
    NumberInput,
    CREATE, DateInput
} from 'react-admin';
import IconContentAdd from '@material-ui/icons/Add';
import IconCancel from '@material-ui/icons/Cancel';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';

import dataProvider from '../dataProvider';

// getting the submit handler of the inner form, and storing it in closure
// note how react-final-form also uses closure to support an external submit
// see: https://codesandbox.io/s/1y7noyrlmq
// but they use a render prop to extract form state, I don't see render props in
// react-admin's Form so came up with this hack
let submitQC;
const QCSubmitExtractor = ({ children }) => {
    submitQC = useForm().submit;
    return children;
};

export default props => {
    const [showDialog, setShowDialog] = React.useState(false);
    const [, setData] = useState({});


    const handleOpenDialog = () => setShowDialog(true);

    const handleCloseDialog = () => setShowDialog(false);

    const handleSave = () => {
        submitQC();
        setShowDialog(false);
    };

    const handleSubmit = async values => {
        fetchStart();

        try {
            const { data } = await dataProvider(CREATE,'payments', {
                data: {...values, tricycle:props.tricycleId}
            });
            setData(data);
            setShowDialog(false);
            props.refresh()
            fetchEnd();
        } catch (e) {
            console.log(`error in handleSubmit: ${e.message}`);
            fetchEnd();
            showNotification(e.message, 'error');
        }
    };

    return (
        <>
            <Button onClick={handleOpenDialog} label="ra.action.create">
                <IconContentAdd />
            </Button>
            <Dialog
                fullWidth
                open={showDialog}
                onClose={handleCloseDialog}
                aria-label="Create payment"
            >
                <DialogTitle>Create post</DialogTitle>
                <DialogContent>
                    <SimpleForm
                        submitOnEnter={false}
                        resource="payments"
                        save={handleSubmit}
                        toolbar={null}
                    >
                        <QCSubmitExtractor>
                            <NumberInput label="Amount (SLL)" source="amount" step={0.01}/>
                            <DateInput label="Payment Date" source="date"/>
                        </QCSubmitExtractor>
                    </SimpleForm>
                </DialogContent>
                <DialogActions>
                    <SaveButton
                        // didn't look yet what the equivalent is of below
                        // saving={isSubmitting}
                        onClick={handleSave}
                        // need to provide something here or it crashes
                        // we handle everything in `handleSave`
                        handleSubmitWithRedirect={() => {}}
                    />
                    <Button
                        label="ra.action.cancel"
                        onClick={handleCloseDialog}
                    >
                        <IconCancel />
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};





