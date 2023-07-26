/**
 * Copyright (c) 2018-2023, BOTLabs GmbH.
 *
 * This source code is licensed under the BSD 4-Clause "Original" license
 * found in the LICENSE file in the root directory of this source tree.
 */

import * as UUID from './UUID'

describe('UUID', () => {
  it('generate', () => {
    const uuid = UUID.generate()
    expect(uuid.substring(0, 2)).toEqual('0x')
    expect(uuid.substring(2)).toHaveLength(64)
  })
})
