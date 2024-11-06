// loginStyles.js

export const loginStyles = () => ({
    formContainer: {
        width: '90%',
        maxWidth: '400px',
        margin: '5% auto 5% auto',
        padding: { xs: '16px', sm: '20px' },
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        borderRadius: '8px',
        backgroundColor: '#f9f9f9',
        textAlign: 'center',
    },
    headerText: {
        fontSize: { xs: '1.25rem', sm: '1.5rem' },
        marginBottom: '20px',
    },
    inputField: {
        marginBottom: '20px',
        width: '100%',
    },
    loginButton: {
        marginTop: '10px',
        padding: '10px',
        fontWeight: 'bold',
        backgroundColor: '#1976d2',
        '&:hover': {
            backgroundColor: '#1565c0',
        },
    },
    feelContainer: {
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        marginBottom: '20px',
    },
    feelButton: {
        padding: '8px',
        borderRadius: '8px',
        border: '1px solid gray',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: '10px',
        width: { xs: '60px', sm: '70px' },
        height: { xs: '70px', sm: '80px' },
    },
    feelButtonSelected: {
        border: '2px solid blue',
        backgroundColor: 'lightblue',
    },
    errorMessage: {
        color: 'red',
        fontSize: '0.875rem',
        marginBottom: '5px',
    },
    signUpLink: {
        display: "flex",
        width: "100%",
        justifyContent: "center",
        fontSize: { xs: '0.875rem', sm: '1rem' },
        marginTop: '10px',
    },
});
