import React from "react"
import makeStyles from "@material-ui/styles/makeStyles";
import Form from "react-bootstrap/Form";

const useStyles = makeStyles({
    root: {
        border: "1px solid",
        padding: 15
    },
});

export default function TwitterFeedConfig(props) {
    const classes = useStyles();
    const {
        name,
        nameConfigCallback,
        verifiedConfigCallback,
        userName,
        userNameConfigCallback,
        age,
        ageConfigCallback,
        description,
        descriptionConfigCallback,
        comments,
        commentsConfigCallback,
        retweets,
        retweetsConfigCallback,
        likes,
        likesConfigCallback,
        profilePicConfigCallback
    } = props;
    return (
        <div className={classes.root}>
            <Form>
                <Form.Group controlId="formUploader">
                    <Form.File
                        label="Profile Picture"
                        onChange={profilePicConfigCallback}
                    />
                </Form.Group>
                <Form.Group controlId="formBasicInfo">
                    <Form.Label>Display Name</Form.Label>
                    <Form.Control type="text" placeholder="Display Name" value={name} onChange={nameConfigCallback}/>

                    <Form.Label>User Name</Form.Label>
                    <Form.Control type="text" placeholder="User Name" value={userName}
                                  onChange={userNameConfigCallback}/>

                    <Form.Label>Tweet Age</Form.Label>
                    <Form.Control type="text" placeholder="Tweet Age" value={age} onChange={ageConfigCallback}/>
                </Form.Group>

                <Form.Group controlId="formCheckboxes">
                    <Form.Check
                        type="checkbox"
                        label="Verified?"
                        onChange={verifiedConfigCallback}
                    />
                </Form.Group>

                <Form.Group controlId="formDescription">
                    <Form.Label>Example textarea</Form.Label>
                    <Form.Control as="textarea" rows="4" value={description} onChange={descriptionConfigCallback}/>
                </Form.Group>

                <Form.Group controlId="formFooter">
                    <Form.Label>Comments</Form.Label>
                    <Form.Control type="number" value={comments} placeholder="Comments" onChange={commentsConfigCallback}/>
                    <Form.Label>Retweets</Form.Label>
                    <Form.Control type="number" value={retweets} placeholder="Retweets" onChange={retweetsConfigCallback}/>
                    <Form.Label>Like</Form.Label>
                    <Form.Control type="number" value={likes} placeholder="Likes" onChange={likesConfigCallback} />
                </Form.Group>
            </Form>
        </div>
    )
}