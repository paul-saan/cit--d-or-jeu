var tabGrilles = [
    
    [
        [1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,0,'in',1,1],
        [1,1,0,0,3,0,0,1,1],      
        [1,1,0,3,0,3,1,1,1],
        [1,0,0,1,1,1,1,1,1],
        [1,0,6,0,0,6,0,1,1],
        [1,0,6,0,6,0,0,'out',1],
        [1,1,1,1,1,1,1,1,1],
    ],
    [
        [1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 0, 0, 0, 0, 1, 1, 1],
        [1, 1, 3, 1, 6, 6, 0, 0, 1],
        [1, 0, 6, 1, 1, 6, 6, 6, 1],
        [1, 0, 0, 1, 1, 1, 6, 0, 1],
        [1, 'in', 0, 1, 1, 0, 3, 0, 1],
        [1, 1, 1, 1, 1,  'out', 0, 6, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1],
    ],
    [
        [1, 1, 1, 1, 1, 1, 1, 1, 1 ,1],
        [1, 1, 1, 0, 7, 6, 0, 0, 'in' ,1],
        [1, 1, 1, 0, 1, 6, 1, 0, 0 ,1],
        [1, 1, 1, 0, 3, 7, 6, 0, 1 ,1],
        [1, 'out', 1, 3, 1, 3, 1, 6, 1 ,1],
        [1, 0, 0, 0, 0, 6, 3, 6, 1 ,1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1 ,1],
    ],
    [
        [1, 1, 1, 1, 1, 1, 1, 1, 1 ,1],
        [1, 'in', 1, 0, 0, 3, 1, 1, 1 ,1],
        [1, 0, 3, 3, 3, 0, 7, 0, 1 ,1],
        [1, 3, 0, 3, 0, 3, 3, 0, 'out' ,1],
        [1, 0, 3, 0, 3, 6, 3, 3, 1 ,1],
        [1, 1, 6, 3, 0, 3, 0, 1, 1 ,1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1 ,1],
    ],
    [
        [1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 0, 'out', 1],
        [1, 1, 1, 1, 6, 3, 1],
        [1, 'in', 1, 1, 0, 3, 1],
        [1, 0, 1, 0, 6, 0, 1],
        [1, 3, 1, 3, 3, 3, 1],
        [1, 6, 0, 6, 0, 0, 1],
        [1, 1, 1, 1, 1, 1, 1],
    ],
    [

        [1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 7, 'in', 0, 4, 7, 3, 4, 1],
        [1, 3, 3, 3, 1, 1, 1, 7, 1],
        [1, 0, 0, 0, 3, 0, 1, 4, 1],
        [1, 3, 4, 0, 3, 3, 1, 7, 1],
        [1, 3, 1, 3, 3, 3, 1, 4, 1],
        [1, 0, 4, 3, 0, 3, 1, 3, 1],
        [1, 1, 1, 1, 0, 0, 0, 'out', 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1],
    ],
    [
        [1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 0, 0, 'out', 1, 1, 1],
        [1, 1, 0, 1, 7, 3, 1, 1],
        [1, 0, 0, 1, 3, 7, 1, 1],
        [1, 3, 1, 3, 7, 3, 0, 1],
        [1, 0, 1, 1, 0, 0, 'in', 1],
        [1, 3, 1, 1, 6, 1, 1, 1],
        [1, 6, 3, 6, 3, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1],
    ],
    [
        [1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 3, 'out', 6, 0, 0, 1],
        [1, 0, 7, 3, 7, 3, 7, 0, 1],
        [1, 0, 3, 3, 7, 6, 7, 0, 1],
        [1, 0, 7, 3, 7, 3, 6, 0, 1],
        [1, 0, 3, 3, 7, 6, 6, 0, 1],
        [1, 0, 3, 3, 7, 3, 7, 0, 1],
        [1, 0, 7, 3, 7, 6, 6, 0, 1],
        [1, 0, 0, 0, 'in', 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1],
    ],
    [
        [1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 0, 'out', 0, 1, 1, 1],
        [1, 1, 1, 6, 6, 6, 1, 1, 1],
        [1, 1, 1, 3, 3, 3, 1, 1, 1],
        [1, 1, 1, 6, 6, 6, 1, 1, 1],
        [1, 1, 1, 3, 3, 3, 1, 1, 1],
        [1, 1, 1, 6, 6, 6, 1, 1, 1],
        [1, 1, 1, 0,'in', 0, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1],
    ],
    [
        [1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1,'out', 6, 3, 6, 3, 6, 3, 1],
        [1, 1, 1, 1, 1, 1, 1, 6, 1],
        [1, 1, 1, 1, 1, 1, 1, 3, 1],
        [1, 1, 6, 3, 6, 1, 1, 6, 1],
        [1, 1, 6, 1,'in', 1, 1, 3, 1],
        [1, 1, 3, 1, 1, 1, 3, 6, 1],
        [1, 1, 6, 3, 6, 3, 6, 3, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1],
    ]
    
]