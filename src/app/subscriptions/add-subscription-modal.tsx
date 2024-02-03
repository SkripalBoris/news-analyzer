import { Autocomplete, Box, Button, Chip, Container, FormControlLabel, FormGroup, Grid, Modal, Paper, Switch, TextField } from '@mui/material';
import React, { FC } from 'react';
import { useFormik } from 'formik';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { useMutation } from '@apollo/client';
import { ADD_SUBSCRIPTION } from '@/graphql/mutations/subscription';
import { GET_SUBSCRIPTIONS } from '@/graphql/queries/subscription';

type AddSubscriptionModalProps = {
    isOpen: boolean;
    onClose: () => void;
}

export const AddSubscriptionModal: FC<AddSubscriptionModalProps> = ({ isOpen, onClose }) => {
    const [addSubscription] = useMutation(ADD_SUBSCRIPTION, {
        refetchQueries: [{ query: GET_SUBSCRIPTIONS }],
    });

    const formik = useFormik({
        initialValues: {
            title: '',
            enabled: true,
            tags: []
        },
        onSubmit: (values, { resetForm }) => {
            addSubscription({
                variables: {
                    title: values.title,
                    status: values.enabled ? 'enabled' : 'disabled',
                     tags: values.tags
                }
            })
            onClose();
            resetForm();
        },
    });

    return <Modal open={isOpen} onClose={onClose}>
        <Box sx={{ width: 400, top: '50%', left: '50%', position: 'absolute', transform: 'translate(-50%, -50%)' }} component={Paper} padding={4}>
            <form onSubmit={formik.handleSubmit}>
                <Grid2 container direction='column' spacing={4}>
                    <Grid2>
                        <TextField
                            label='Title'
                            name='title'
                            value={formik.values.title}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            fullWidth
                        />
                    </Grid2>
                    <Grid2>
                        <FormControlLabel
                            control={<Switch defaultChecked />}
                            label="Is subscription enabled"
                            name="enabled" value={formik.values.enabled}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                    </Grid2>
                    <Grid2>
                        <Autocomplete
                            fullWidth
                            value={formik.values.tags}
                            clearIcon={false}
                            options={[]}
                            freeSolo
                            multiple
                            renderTags={(value, props) =>
                                value.map((option, index) => (
                                    <Chip label={option} {...props({ index })} />
                                ))
                            }
                            renderInput={(params) => <TextField label="Add Tags" name='tags'  {...params} />}
                            onChange={(_event, values) => formik.setFieldValue("tags", values)}
                            onBlur={formik.handleBlur}
                        />
                    </Grid2>
                    <Grid2>
                        <Button type='submit' fullWidth>Submit</Button>
                    </Grid2>
                </Grid2>
            </form>
        </Box>
    </Modal>
}