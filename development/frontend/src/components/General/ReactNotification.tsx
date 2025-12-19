import React from "react";
import { Notification, useToaster } from "rsuite";

type NotificationType = "info" | "success" | "warning" | "error";

type NotifyOptions = {
  message: string;
  description?: string;
  type?: NotificationType;
  placement?: "topStart" | "topEnd" | "bottomStart" | "bottomEnd";
  duration?: number;
};

export const useReactNotification = () => {
  const toaster = useToaster();

  const notify = ({
    message,
    description,
    type = "info",
    placement = "topEnd",
    duration = 4000,
  }: NotifyOptions) => {
    toaster.push(
      <Notification type={type} header={message} closable>
        {description && <p>{description}</p>}
      </Notification>,
      { placement, duration }
    );
  };

  return notify;
};
