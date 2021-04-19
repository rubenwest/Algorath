import React from 'react'

const ChartMongoEmployees = () => {
    return (


            <iframe title='employees'
                    style={{    
                                background: '#FFFFFF', 
                                border: 'none',
                                borderRadius: '2px',
                                boxShadow: '0 2px 10px 0 rgba(70, 76, 79, .2)',
                                marginRight: '15px' 
                        }} 
                    width={640} 
                    height={380} 
                    src="https://charts.mongodb.com/charts-project-0-zmgut/embed/charts?id=c9b704eb-2203-4399-ab43-5299e09c09f0&autoRefresh=10&theme=light" 
            />
    )
}

export default ChartMongoEmployees
