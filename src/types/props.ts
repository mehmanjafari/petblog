export type IActiveProps = {
  stateIsActive: {
    searchActive: string;
    popupActive: boolean;
  };
  setStateIsActive: React.Dispatch<
    React.SetStateAction<{
      searchActive: string;
      popupActive: boolean;
    }>
  >;
};
