import useTranslation from "next-translate/useTranslation";

export const ServerComponent = () => {
  const { t } = useTranslation();

  return <p>SERVER: {t("common:hello")}</p>;
};
