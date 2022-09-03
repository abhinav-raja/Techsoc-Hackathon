import { Card, Form, Input, Typography, Button, Select } from "antd";
import HeaderHostel from "../common/HeaderHostel";

const AddComplaint = () => {
  const onFinish = (values) => {
    console.log(values);
  };
  const { Option } = Select;

  return (
    <>
      <HeaderHostel />
      <center>
        <Card
          style={{
            width: "700px",
            marginTop: "80px",
            boxShadow: "5px 5px #D3D3D3",
          }}
          title={
            <center>
              <Typography.Title level={3} style={{ margin: "unset" }}>
                Register your complaint
              </Typography.Title>
            </center>
          }
        >
          <Form onFinish={onFinish}>
            <Form.Item label="Hostel:" rules={[{ required: true }]}>
              <Select defaultValue="Alakananda">
                <Option value="Alakananda">Alakananda</Option>
                <Option value="Brahmaputra">Brahmaputra</Option>
                <Option value="Cauvery">Cauvery</Option>
                <Option value="Ganga">Ganga</Option>
                <Option value="Godavari">Godavari</Option>
                <Option value="Jamuna">Jamuna</Option>
                <Option value="Krishna">Krishna</Option>
                <Option value="Mahanadhi">Mahanadhi</Option>
                <Option value="Mandakini">Mandakini</Option>
                <Option value="Narmada">Narmada</Option>
                <Option value="Pampa">Pampa</Option>
                <Option value="Saraswathi">Saraswathi</Option>
                <Option value="Sindhu">Sindhu</Option>
                <Option value="Tamiraparani">Tamiraparani</Option>
                <Option value="Tapti">Tapti</Option>
                <Option value="Bhadra">Bhadra</Option>
                <Option value="Sabarmati">Sabarmati</Option>
                <Option value="Sarayu">Sarayu</Option>
                <Option value="Sharavathi">Sharavathi</Option>
                <Option value="Swarnamukhi">Swarnamukhi</Option>
                <Option value="Tunga">Tunga</Option>
              </Select>
            </Form.Item>
            <Form.Item label="Complaint:" rules={[{ required: true }]}>
              <Input.TextArea />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </center>
    </>
  );
};

export default AddComplaint;
