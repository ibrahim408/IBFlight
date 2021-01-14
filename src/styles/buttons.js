export const radioSize = {
    height: 30,
    width: 30
};

export const small = {
    height: 70,
    width: 70,
};
  
export const rounded = {
    borderRadius: 50
};

export const border = {
    backgroundColor: '#FFFFFF',
    shadowOffset: { height: 1, width: 1 }, 
    shadowColor: '#000000', 
    shadowOpacity: 0.1, 
    shadowRadius: 5
};

export const smallRounded = {
    ...small,
    ...rounded,
    ...border,
};

export const radioButton = {
    ...radioSize,
    ...rounded,
    ...border
};