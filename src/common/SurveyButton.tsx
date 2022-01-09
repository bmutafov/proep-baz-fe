import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
} from "@mui/material";
import React, { useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SendIcon from "@mui/icons-material/Send";
import useIsMobile from "../hooks/useIsMobile";

interface SurveyButtonProps {
  onClick: () => void;
}

interface PreviousButtonProps {
  visible: boolean;
}

const SubmitButton: React.FC<SurveyButtonProps> = ({ onClick }) => {
  const isMobile = useIsMobile();
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleSubmit = () => {
    setOpen(false);
    onClick();
  };

  const dialog = (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        Are you ready to submit?
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          This was the last question. You are now submitting the survey.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button
          onClick={handleSubmit}
          autoFocus
          variant="contained"
          disableElevation
        >
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );

  if (isMobile) {
    return (
      <>
        {dialog}
        <IconButton
          color="primary"
          aria-label="submit questionnaire"
          component="span"
          onClick={handleOpen}
        >
          <SendIcon />
        </IconButton>{" "}
      </>
    );
  }

  return (
    <>
      {dialog}
      <Button
        variant="contained"
        disableElevation
        endIcon={<SendIcon />}
        onClick={handleOpen}
      >
        Submit
      </Button>
    </>
  );
};

const NextButton: React.FC<SurveyButtonProps> = ({ onClick }) => {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <IconButton
        color="primary"
        aria-label="next question"
        component="span"
        onClick={onClick}
      >
        <ArrowForwardIcon />
      </IconButton>
    );
  }

  return (
    <Button variant="outlined" endIcon={<ArrowForwardIcon />} onClick={onClick}>
      Next
    </Button>
  );
};

const PreviousButton: React.FC<SurveyButtonProps & PreviousButtonProps> = ({
  onClick,
  visible,
}) => {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <IconButton
        color="primary"
        aria-label="previous question"
        component="span"
        onClick={onClick}
        disabled={!visible}
      >
        <ArrowBackIcon />
      </IconButton>
    );
  }

  return (
    <Button
      variant="text"
      startIcon={<ArrowBackIcon />}
      onClick={onClick}
      disabled={!visible}
    >
      Previous
    </Button>
  );
};

const Container: React.FC = ({ children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: "0.5rem",
      }}
    >
      {children}
    </Box>
  );
};

export const SurveyButton = {
  Submit: SubmitButton,
  Next: NextButton,
  Previous: PreviousButton,
  Container,
};
