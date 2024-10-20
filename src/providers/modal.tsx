"use client";

import { createContext, ReactNode, useState } from "react";
import { ProjectProps } from "../utils/project.type";
import { ProjectModal } from "../components/ProjectModal";

interface ModalContextData {
  visible: boolean;
  handleModalVisible: () => void;
  project: ProjectProps | undefined;
  setProjectDetail: (detail: ProjectProps) => void;
}

export const ModalContext = createContext({} as ModalContextData);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [visible, setVisible] = useState(false);
  const [project, setProject] = useState<ProjectProps>();

  function handleModalVisible() {
    setVisible(!visible);
  }

  function setProjectDetail(detail: ProjectProps) {
    setProject(detail);
  }

  return (
    <ModalContext.Provider
      value={{ visible, handleModalVisible, project, setProjectDetail }}
    >
      {visible && <ProjectModal />}
      {children}
    </ModalContext.Provider>
  );
};
