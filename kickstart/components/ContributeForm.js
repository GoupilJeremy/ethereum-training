import React, { Component } from 'react';
import { Button, Form, Input } from 'semantic-ui-react';

class ContributeForm extends Component {
    render() {
        return (<Form>
            <Form.Field>
                <label>Amount to contribute</label>
                <Input
                    label='ether'
                    labelPosition="right"
                />
            </Form.Field>
            <Button type='submit' primary>Contribute!</Button>
        </Form>);
    }
}

export default ContributeForm;