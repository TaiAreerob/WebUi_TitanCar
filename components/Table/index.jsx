import React from 'react'
import { Table as TableReactstrap } from 'reactstrap'
import _ from 'lodash'
import classnames from 'classnames'
import { SyncLoader } from 'react-spinners'
import { SmartColumn } from './SmartColumn'
import './index.scss'

const Loading = () => {
    return (
        <div className="PhaitoniousTable__Loader">
            <SyncLoader />
        </div>
    )
}

const TableComponent = (props) => {
    return (
        <>
            <TableReactstrap
                hover
                striped
                borderless
                responsive={props.responsive}
                className={classnames('PhaitoniousTable', props.className)}>
                {props.thead}
                {!props.isLoading && props.children}
            </TableReactstrap>
            {props.isLoading && Loading()}
        </>
    )
}

const SmartTableComponent = (props) => {
    const {
        isMock,
        className,
        header,
        body,
        footer,
        isLoading,
        renderCustomRow,
        renderCustomFooter,
    } = props


    const thead = () => {
        const renderCell = (cell) => {
            if (_.isObject(cell)) {
                return <td>{cell.text1}<br />{cell.text2}</td>
            }
            return <td>{cell}</td>
        }
        return (
            <thead>
                <tr>
                    {header && header.map(renderCell)}
                </tr>
            </thead>
        )
    }

    const renderComlumn = (col) => {
        if (_.isObject(col)) {
            if (!_.isEmpty(col.url)) {
                return <td><a href={col.url} target="_blank">{col.value}</a></td>
            }
        }
        return <td>{col}</td>
    }

    const renderRow = (row) => {
        if (renderCustomRow) {
            return renderCustomRow(row)
        }
        // new response SmartColumn
        if (row.row) {
            return (
                <tr>
                    {row.row.map((col) => <SmartColumn {...col} />)}
                </tr>
            )
        }
        return (
            <tr>
                {row && row.map((col) => renderComlumn(col))}
            </tr>
        )
    }

    const renderTfoot = () => {
        if (renderCustomFooter) {
            return renderCustomFooter(footer)
        }
        return (
            <tr>
                {footer && footer.map(item => <th>{item}</th>)}
            </tr>
        )
    }

    const renderBody = () => {
        return body && body.map(renderRow)
    }
    return (
        <Table {...props} thead={thead()} isLoading={isLoading} {...props}>
            <tbody>
                {renderBody()}
            </tbody>
            <tfoot>
                {renderTfoot()}
            </tfoot>
            {props.children}
        </Table>
    )
}

class SmartTableClass extends React.Component {

    constructor(props) {
        super(props)
        this.displayName = 'SmartTableClass'
        this.state = {
            page: 0,
            itemPerPage: 10,
        }

    }
    componentDidUpdate(prevProps) {
        if (prevProps.body.length != this.props.body.length) {
            this.setState({ page: 0 })
        }
    }

    getFirstItemOfPage = () => this.state.page * this.state.itemPerPage

    getPageAmount = () => {
        let pageAmount = this.props.body.length / this.state.itemPerPage
        return pageAmount
    }

    renderPaginationItem = (pagination) => {
        const renderItem = (page) => {
            return (
                <span
                    className={classnames('SmartTable__PaginationItem', { active: this.state.page == page })}
                    onClick={() => { this.setState({ page }) }}
                >
                    {page + 1}
                </span>
            )
        }
        if (pagination.length > 10) {
            const firstPage = this.state.page - 3 < 0 ? 0 : this.state.page - 3
            const filterPagination = pagination.slice(firstPage, this.state.page + 4)
            return filterPagination.map(renderItem)
        }
        return pagination.map(renderItem)
    }

    renderPagination = () => {
        const pageAmount = this.getPageAmount()
        if (this.props.body.length < 1 || pageAmount < 1) return null
        let pagination = _.range(pageAmount)
        return (
            <div className="SmartTable__Pagination">
                <span
                    className="SmartTable__PaginationItem"
                    onClick={() => { this.setState({ page: 1 }) }}>
                    {'<<'}
                </span>
                {
                    this.state.page > 1 &&
                    <span
                        className="SmartTable__PaginationItem"
                        onClick={() => { this.setState({ page: this.state.page - 1 }) }}>
                        {'<'}
                    </span>
                }
                {this.renderPaginationItem(pagination)}
                {
                    this.state.page < pagination.length - 1 &&
                    <span className="SmartTable__PaginationItem" onClick={() => { this.setState({ page: this.state.page + 1 }) }}>{'>'}</span>
                }
                <span
                    className="SmartTable__PaginationItem"
                    onClick={() => { this.setState({ page: pagination.length - 1 }) }}>
                    {'>>'}
                </span>
            </div>
        )
    }

    render() {
        if (this.props.isEndless) {
            return <SmartTableComponent {...this.props} />
        }
        const body = this.props.body.slice(this.getFirstItemOfPage(), this.getFirstItemOfPage() + this.state.itemPerPage)
        return (
            <div className="SmartTable">
                <SmartTableComponent {...this.props} body={body} />
                {this.renderPagination()}
            </div>
        )
    }
}

const Table = React.memo(TableComponent)
const SmartTable = React.memo(SmartTableComponent)
const SmartTableContainer = React.memo(SmartTableClass)
export {
    Table,
    TableComponent,
    SmartTable,
    SmartTableContainer,
    SmartTableComponent,
}
