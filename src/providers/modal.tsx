"use client";

import { createContext, ReactNode, useState } from "react";
import { ProjectProps } from "../utils/project.type";

interface ModalContextData {
  visible: boolean;
  handleModalVisible: () => void;
  project: ProjectInfo | undefined;
  setProjectDetail: (detail: ProjectInfo) => void;
}

interface ProjectInfo {
  project: ProjectProps;
}

export const ModalContext = createContext({} as ModalContextData);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [visible, setVisible] = useState(false);
  const [project, setProject] = useState<ProjectInfo>();

  function handleModalVisible() {
    setVisible(!visible);
  }

  function setProjectDetail(detail: ProjectInfo) {
    setProject(detail);
  }

  return (
    <ModalContext.Provider
      value={{ visible, handleModalVisible, project, setProjectDetail }}
    >
      {children}
    </ModalContext.Provider>
  );
};
