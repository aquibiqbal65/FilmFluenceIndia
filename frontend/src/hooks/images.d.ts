declare module '*.jpg' {
  const value: string;
  export default value;
}
declare module '*.png' {
  const value: string;
  export default value;
}
declare module '*.mp4' {
  const value: string;
  export default value;
}
declare module '*.svg' {
  const value: string;
  export default value;
}

declare module "@formfacade/embed-react" {
  interface FormfacadeEmbedProps {
    formFacadeURL: string;
    onSubmitForm?: () => void;
  }

  const FormfacadeEmbed: React.FC<FormfacadeEmbedProps>;
  export default FormfacadeEmbed;
}
