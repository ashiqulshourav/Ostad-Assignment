const MailTo = ({email, className}) => {
  return (
    <a className={className} href={`mailto:${email}`}>
      {email}
    </a>
  );
};

export default MailTo;