export type Memo = {
  id: string,
  title: string,
  category: string,
  description: string,
  date: string,
  markDiv: number,
};

export type ModalButton = {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
};
