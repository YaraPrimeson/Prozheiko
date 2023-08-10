import React, { FC } from "react";
import { Service } from "@prisma/client";

type ServiceEditModalProps = {
  service: Service;
  fetchServices: () => Promise<any>;
  setServices: (data: any) => void;
};
const ServiceEditModal: FC<ServiceEditModalProps> = ({
  service,
  fetchServices,
  setServices,
}) => {
  return <div></div>;
};

export default ServiceEditModal;
