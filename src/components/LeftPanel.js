import './styles/LeftPanel.css';
import React from "react";
import 'antd/dist/antd.css';
import {
    Form,
    Button,
    Select,
    DatePicker,
    Checkbox,
    Row,
    Col
} from 'antd';
import axios from "axios";
//import PopularTags from "./PopularTags";

const {RangePicker} = DatePicker;
const {Option} = Select;
const children = [];
for (let i = 10; i < 36; i++) {
    children.push(<Option key={i.toString(36) + i} value="">{i.toString(36) + i}</Option>);
}

class LeftPanel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            componentSize: 'default',
            dates: [],
            hackValue: null,
            value: null,
            tagInputSize: 'default',
            tags: [],
            checkedLanguages: [],
            languages: []
        };
    }

    onFormLayoutChange = ({size}) => {
        this.setState({componentSize: size});
    };

    disabledDate = (current) => {
        if (!this.state.dates || this.state.dates.length === 0) {
            return false;
        }
        const tooLate = this.state.dates[0] && current.diff(this.state.dates[0], 'days') > 7;
        const tooEarly = this.state.dates[1] && this.state.dates[1].diff(current, 'days') > 7;
        return tooEarly || tooLate;
    };

    onOpenChange = (open) => {
        if (open) {
            this.setState({
                dates: [],
                hackValue: []
            });
        } else {
            this.setState({
                hackValue: undefined
            });
        }
    };

    handleChange = (value) => {
        console.log(`Selected: ${value}`);
        this.setState({tags: [...this.state.tags, value]})
    }

    onChange = (checkedValues) => {
        console.log('checked = ', checkedValues);
        this.setState({
            checkedLanguages: [...this.state.checkedLanguages, checkedValues].reverse().filter(function (e, i, arr) {
                return arr.indexOf(e, i + 1) === -1;
            }).reverse()
        })
    }

    submitHandler = (event) => {
        event.preventDefault();
        const data = {
            dates: this.state.dates,
            tags: this.state.tags,
            checkedLanguages: this.state.checkedLanguages
        }
        this.props.sendFilterData(data);
    }

    componentDidMount() {
        axios.get('https://localhost:44384/Language?count=2147483647')
            .then(response => {
                console.log(response);
                this.setState({languages: response.data});
            })
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        const {languages} = this.state

        return (
            <div className="left-panel">
                {/*<PopularTags/>*/}
                <Form style={{marginTop: '7%', paddingLeft: '10%'}}
                      labelCol={{
                          span: 6,
                      }}
                      wrapperCol={{
                          span: 20,
                      }}
                      layout="horizontal"
                      initialValues={{
                          size: this.state.componentSize,
                      }}
                      onValuesChange={this.onFormLayoutChange}
                      size={this.state.componentSize}
                      onSubmitCapture={this.submitHandler}
                >
                    <h3>Filter</h3>
                    <div style={{marginBottom: '1%'}}>Date range:</div>
                    <Form.Item style={{marginBottom: '2%'}}>
                        <RangePicker
                            value={this.state.hackValue || this.state.value}
                            /*disabledDate={this.disabledDate}*/
                            onCalendarChange={
                                val => this.setState({dates: val})
                            }
                            onChange={val => this.setState({value: val})}
                            onOpenChange={this.onOpenChange}/>
                    </Form.Item>

                    <div style={{marginBottom: '1%'}}>Tags:</div>
                    <Form.Item style={{marginBottom: '2%'}}>
                        <Select
                            mode="tags"
                            size={this.state.tagInputSize}
                            placeholder="Please select"
                            onChange={this.handleChange}
                            style={{width: '100%'}}/>
                    </Form.Item>
                    <div style={{marginBottom: '1%'}}>Languages:</div>
                    <Form.Item>
                        <Checkbox.Group style={{width: '100%'}} onChange={this.onChange}>
                            <Row>
                                {
                                    languages.length ?
                                        languages.map(language =>
                                                <Col id={language.id} span={10}>
                                                    <Checkbox value={language.id}>{language.name}</Checkbox>
                                                </Col>
                                            /*<Option key={language.id} value={language.id}>
                                                {language.name}
                                            </Option>*/
                                        ) :
                                        null
                                }
                                {/*<Col id="1" span={10}>
                                    <Checkbox value="1">C++</Checkbox>
                                </Col>
                                <Col id="2" span={10}>
                                    <Checkbox value="2">Java</Checkbox>
                                </Col>
                                <Col id="3" span={10}>
                                    <Checkbox value="3">Python</Checkbox>
                                </Col>
                                <Col id="4" span={10}>
                                    <Checkbox value="4">JavaScript</Checkbox>
                                </Col>
                                <Col id="5" span={10}>
                                    <Checkbox value="5">C#</Checkbox>
                                </Col>
                                <Col id="6" span={10}>
                                    <Checkbox value="6">TypeScript</Checkbox>
                                </Col>
                                <Col id="7" span={10}>
                                    <Checkbox value="7">SQL</Checkbox>
                                </Col>
                                <Col id="8" span={10}>
                                    <Checkbox value="8">C</Checkbox>
                                </Col>
                                <Col id="9" span={10}>
                                    <Checkbox value="9">Ruby</Checkbox>
                                </Col>
                                <Col id="10" span={10}>
                                    <Checkbox value="10">Haskell</Checkbox>
                                </Col>*/}
                            </Row>
                        </Checkbox.Group>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit"
                                style={{backgroundColor: '#BDEBF3', color: '#127486'}}>
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}

export default LeftPanel;
