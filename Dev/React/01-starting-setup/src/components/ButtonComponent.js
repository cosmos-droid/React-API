import Button from "@mui/material/Button";

const ButtonComponent = (props) => {
  const onClickEvent = () => {
    props.changeHandler();
  };
  return <Button onClick={onClickEvent}>deneme</Button>;
};

export default ButtonComponent;
