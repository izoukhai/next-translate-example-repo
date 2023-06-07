"use client";

import useTranslation from "next-translate/useTranslation";

export const ClientComponent = () => {
  const { t } = useTranslation();

  return <p>CLIENT: {t("common:hello")}</p>;
};
