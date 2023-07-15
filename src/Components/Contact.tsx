import { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleChange } from "../store/inputs/inputs-slice";
import { RootState } from "../store/store";

const Contact = () => {
  const dispatch = useDispatch();

  const { name, email, title, description } = useSelector(
    (state: RootState) => state.inputs
  );

  const handleChangeDispatch = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch(handleChange({ name, value }));
  };

  const handleTextAreaChangeDispatch = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    dispatch(handleChange({ name, value }));
  };

  // const handleSubmit = () => dispatch(resetInputs());

  return (
    <div className="contact" id="contact">
      <h4>START A PROJECT</h4>
      <form
        action="https://formspree.io/myypwolk"
        method="POST"
        className="contact-form"
      >
        <div>
          <label htmlFor="Name">
            Name <span>*</span>
          </label>
          <input
            type="text"
            required
            name="name"
            onChange={(evt) => handleChangeDispatch(evt)}
            value={name}
          />
        </div>
        <div>
          <label htmlFor="Email">
            Email <span>*</span>
          </label>
          <input
            type="email"
            required
            name="email"
            onChange={(evt) => handleChangeDispatch(evt)}
            value={email}
          />
        </div>
        <div>
          <label htmlFor="Project Title">
            Project Title <span>*</span>
          </label>
          <input
            type="text"
            required
            name="title"
            onChange={(evt) => handleChangeDispatch(evt)}
            value={title}
          />
        </div>
        <div>
          <label htmlFor="Project Title">
            Project Description <span>*</span>
          </label>
          <textarea
            rows={8}
            required
            name="description"
            onChange={(evt) => handleTextAreaChangeDispatch(evt)}
            value={description}
          />
        </div>
        <div className="contact-btn">
          <button type="submit">
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
