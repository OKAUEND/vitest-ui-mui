import {describe, test,expect,} from "vitest"
import { render,screen} from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import '@testing-library/jest-dom'

import {Mui} from "./mui"

describe("Material UI", () => {
    test("入力内容が不正の場合にエラーメッセージが表示される",  async () => {
        render(<Mui />)
        const input =  screen.getByRole("textbox")
        await userEvent.type(input, "a")
        expect(screen.getByText("入力内容が不正です")).toBeInTheDocument()
    })
    test("Vitest UIで確認をするためテストが成功しないようにする",  async () => {
      render(<Mui />)
      expect(screen.getByText("入力内容が不正です")).toBeInTheDocument()
  })
})