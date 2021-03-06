import { Link } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';
import toast, { Toaster } from "react-hot-toast"; import {
  Box,
  Text,
  FormControl,
  Input,
  Button,
  Textarea,
} from "@chakra-ui/react";
import { Keys, getItem } from "../utils/LocalStorage";
import { Memo } from "../type/Type"
import { LogoutButton } from "../components/LogoutButton";
import { ToArticlesButton } from "../components/ToArticlesButton";
import { BackHomeButton } from "../components/BackHomeButton";
// eslint-disable-next-line
export const Notepad = () => {
  const [title, setTitle] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [markDiv, setMarkDiv] = useState<number>(0);
  const [memos, setMemos] = useState<Memo>();
  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setTitle(e.target.value)
  };
  const onChangeCategory = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setCategory(e.target.value)
  };
  const onChangeDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    setDescription(e.target.value)
  };
  const onChangeDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setDate(e.target.value);
  };
  const onChangeMarkDiv = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const newMarkDiv = parseInt(e.target.value,10)
    setMarkDiv(newMarkDiv)
  };

  const onClickAdd = async () => {
    try {
      const token = getItem(Keys.access_token);
      const response = await axios.post<Memo>("https://raisetech-memo-api.herokuapp.com/api/memo",
        {
          title,
          category,
          description,
          date,
          mark_div: markDiv,
        }, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      })
      console.log(response.data);
      setMemos(response.data);
      setTitle("");
      setCategory("");
      setDescription("");
      setDate("");
      setMarkDiv(0);
    }
    catch (error) {
      console.error("??????????????????");
      toast.error("?????????????????????????????????????????????");
    };
  };

  return (
    <Box>
      <Text fontSize={32} textAlign={["center"]}>
        ??????????????????????????????
      </Text>
      <FormControl>
        <Input
          type="text"
          m="10px"
          w="800px"
          onChange={onChangeTitle}
          placeholder="?????????????????????"
          value={title}
          isrequired
        />
        <br />
        <Input
          type="text"
          m="10px"
          w="600px"
          onChange={onChangeCategory}
          placeholder="????????????????????????"
          value={category}
        />
        <br />
        <Textarea
          m="10px"
          w="800px"
          onChange={onChangeDescription}
          placeholder="???????????????"
          value={description}
        />
        <br />
        <input type="date" onChange={onChangeDate} value={date} />
        <input type="radio" name="revel" value="0" onChange={onChangeMarkDiv} />
        ??????
        <input type="radio" name="revel" value="1" onChange={onChangeMarkDiv} />
        ??????
        <Button
          type="button"
          size="sm"
          m="10px"
          colorScheme="teal"
          onClick={onClickAdd}
        >
          ????????????
        </Button>
        <br />
      </FormControl>
      <Box>
        <Text fontSize={24} textAlign={["center"]}>
          ?????????????????????????????????
        </Text>
        <p>
          {memos?.id}
          <br />
          {memos?.title}
          <br />
          {memos?.category}
          <br />
          {memos?.description}
          <br />
          {memos?.date}
          <br />
          {memos?.markDiv}
        </p>
        <br />
        <Box>
          <ToArticlesButton />
        </Box>
        <Toaster />
      </Box>
      <Box>
        <LogoutButton color="white" />

        <BackHomeButton color="white" />

        <Link to="/">HOME????????????</Link>
      </Box>
    </Box>
  );
};