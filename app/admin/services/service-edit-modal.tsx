import React, { FC } from "react";
import { Service } from "@prisma/client";

type ServiceEditModalProps = {
  service: Service;
};
const ServiceEditModal: FC<ServiceEditModalProps> = ({ service }) => {
  return <div></div>;
};

export default ServiceEditModal;
