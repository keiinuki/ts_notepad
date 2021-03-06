import { useState, memo } from "react";
import axios from "axios";
import { useRecoilState } from "recoil";
import toast, { Toaster } from "react-hot-toast";
import {
  Box,
  FormControl,
  Input,
  Button,
  Textarea,
  Text,
} from "@chakra-ui/react";
import { Keys, getItem } from "../utils/LocalStorage";
import { Memo, ModalButton } from "../type/Type";
import { getMemosState, addIdState } from "../store/atom";

export const EditForm = memo((props: ModalButton) => {
  const [getMemos, setGetMemos] = useRecoilState<Memo[]>(getMemosState);
  const [addId] = useRecoilState<string>(addIdState);
  const editMemo: Memo = getMemos.find((value) => value.id === addId) as Memo;
  const [id, setId] = useState<string>(editMemo.id);
  const [title, setTitle] = useState<string>(editMemo.title);
  const [category, setCategory] = useState<string>(editMemo.category);
  const [description, setDescription] = useState<string>(editMemo.description);
  const [date, setDate] = useState<string>(editMemo.date);
  const [markDiv, setMarkDiv] = useState<number>(editMemo.markDiv);


  const onChangeId = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setId(e.target.value);
  };
  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setTitle(e.target.value);
  };
  const onChangeCategory = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setCategory(e.target.value);
  };
  const onChangeDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    setDescription(e.target.value);
  };
  const onChangeDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setDate(e.target.value);
  };
  const onChangeMarkDiv = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const newMarkDiv = parseInt(e.target.value,10);
    setMarkDiv(newMarkDiv);
  };
  const onClickPut = async () => {
    try {
      const token = getItem(Keys.access_token);
      await axios.put<Memo>(
        `https://raisetech-memo-api.herokuapp.com/api/memo/${id}`,
        {
          title,
          category,
          description,
          date,
          mark_div: markDiv,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const response = await axios.get<Memo[]>(
        "https://raisetech-memo-api.herokuapp.com/api/memos",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setGetMemos(response.data);
      console.log(id);
      setId("");
      setTitle("");
      setCategory("");
      setDescription("");
      setDate("");
      setMarkDiv(0);
      props.setShow(false);
    } catch (error) {
      toast.error("??????????????????");
    }
  };
  return (
    <Box>
      <Text fontSize={24} textAlign={["center"]}>
        ??????????????????????????????
      </Text>
      <FormControl>
        <input type="number" onChange={onChangeId} value={id} />
        <br />
        <Input type="text" onChange={onChangeTitle} required value={title} />
        <br />
        <Input type="text" onChange={onChangeCategory} value={category} />
        <br />
        <Textarea onChange={onChangeDescription} value={description} />
        <br />
        <input type="date" onChange={onChangeDate} value={date} />
        <input
          type="radio"
          name="revel"
          value="0"
          onChange={onChangeMarkDiv}
          defaultChecked
        />
        ??????
        <input
          type="radio"
          name="revel"
          value="1"
          onChange={onChangeMarkDiv}
        />
        ??????
        <br />
        <Button type="button" size="sm" m="10px" onClick={onClickPut}>
          ????????????
        </Button>
      </FormControl>
      <Box>
        <Toaster />
      </Box>
    </Box>
  );
});
